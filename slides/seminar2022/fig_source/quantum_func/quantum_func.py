import matplotlib.pyplot as plt
import matplotlib.colors as colors
from matplotlib import rc
import numpy as np
import cmath

REAL_E = 70.1
IMAG_E = 5.1

V0 = 40
V1 = V0
RA = 1
RB = 2 * RA

SIGN = cmath.exp(1j * 0)
SIGN = cmath.exp(1j * cmath.pi)

rc('text', usetex=True)

def arr(x, y, SIGN):
    e = x + 1j * y
    sq_ev0 = SIGN * cmath.sqrt(e + V0)
    sq_ev1 = SIGN * cmath.sqrt(V1 - e)
    sq_e = SIGN * cmath.sqrt(e)
    arr = np.array([
        [
            -cmath.sin(sq_ev0 * RA), 
            cmath.sinh(sq_ev1 * RA), 
            cmath.cosh(sq_ev1 * RA), 
            0
        ],
        [
            -sq_ev0 * cmath.cos(sq_ev0 * RA),
            sq_ev1 * cmath.cosh(sq_ev1 * RA), 
            sq_ev1 * cmath.sinh(sq_ev1 * RA), 
            0
        ],
        [
            0,
            cmath.sinh(sq_ev1 * RB), 
            cmath.cosh(sq_ev1 * RB),
            -cmath.exp(1j * sq_e * RB) 
        ],
        [
            0,
            sq_ev1 * cmath.cosh(sq_ev1 * RB), 
            sq_ev1 * cmath.sinh(sq_ev1 * RB),
            -1j * sq_e * cmath.exp(1j * sq_e * RB) 
        ]
        ])
    return arr
#

def psi(r, x, y, vec):
    e = x + 1j * y
    sq_ev0 = SIGN * cmath.sqrt(e + V0)
    sq_ev1 = SIGN * cmath.sqrt(V1 - e)
    sq_e = SIGN * cmath.sqrt(e)
    c_a, c_b, c_c, c_d = vec

    if 0 < r <= RA:
        psi = c_a * cmath.sin(sq_ev0 * r) / r
    elif RA < r <= RB:
        psi = (c_b * cmath.sinh(sq_ev1 * r) + c_c * cmath.cosh(sq_ev1 * r)) / r
    elif RB < r:
        psi = c_d * cmath.exp(1j * sq_e * r) / r
    #

    return V1 * psi / (sq_ev0 * c_a)
#

def V(r):
    if 0 < r <= RA:
        V = -V0
    elif RA < r <= RB:
        V = V1
    elif RB < r:
        V = 0
    #

    return V
#

eig_val, eig_vec = np.linalg.eig(arr(REAL_E, IMAG_E, SIGN))

i_eig = np.abs(eig_val).argmin()
vec = eig_vec[:, i_eig]

fig = plt.figure(figsize=(8, 3))
ax1 = fig.add_subplot(111)

r = np.linspace(10**(-10), 2*RB, 1000)
abs_psi = [np.abs(psi(r[k], REAL_E, IMAG_E, vec)) for k in range(len(r))]

ax1.plot(r, [V(r[k]) for k in range(len(r))], c="red")
ax1.plot(r, abs_psi, c="black")

ax1.set_xlim(0, 2*RB)
ax1.set_xlabel(r'$r$', fontsize=20)
ax1.set_ylabel(r'$|\psi|^2$', fontsize=20)
plt.suptitle(
    r'$\mathrm{Re}(E)=$' + f' {REAL_E}, ' + r'$\mathrm{Im}(E)=$' + f' {IMAG_E}', fontsize=20)
fig.subplots_adjust(bottom=0.2)
plt.grid()

plt.savefig("quantum_func.png", format="png", dpi=300)

plt.show()