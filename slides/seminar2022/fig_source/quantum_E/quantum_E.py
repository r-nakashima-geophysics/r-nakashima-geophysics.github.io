import matplotlib.pyplot as plt
import matplotlib.colors as colors
from matplotlib import rc
import numpy as np
import cmath

V0 = 40
V1 = V0
RA = 1
RB = 2 * RA

min_re = -V0
max_re = 2 * V1
min_ie = -V0/2
max_ie = V0/2

rc('text', usetex=True)

REAL_E = np.arange(min_re, max_re, 0.1)
IMAG_E = np.arange(min_ie, max_ie, 0.1)
MESH_RE, MESH_IE = np.meshgrid(REAL_E, IMAG_E)

def arr(x, y, sign):
    e = x + 1j * y
    sq_ev0 = sign * cmath.sqrt(e + V0)
    sq_ev1 = sign * cmath.sqrt(V1 - e)
    sq_e = sign * cmath.sqrt(e)
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
    # arr = np.array([
    #     [
    #         cmath.sin(sq_ev0 * RA), 
    #         -cmath.exp(1j * sq_e * RA),
    #     ],
    #     [
    #         sq_ev0 * cmath.cos(sq_ev0 * RA),
    #         -1j * sq_e * cmath.exp(1j * sq_e * RA) 
    #     ]
    #     ])
    return arr
#

fig = plt.figure(figsize=(10, 7))
ax1 = fig.add_subplot(211)
ax2 = fig.add_subplot(212)

# ========== #

sign = cmath.exp(1j * 0)

inv_det = np.zeros_like(MESH_RE)
i_ie = 0
for ie in IMAG_E:
    i_re = 0
    for re in REAL_E:
        det = np.linalg.det(arr(re, ie, sign))
        inv_det[i_ie, i_re] = np.abs(det)
        i_re += 1
    #
    i_ie += 1 
#

c1 = ax1.pcolor(
    MESH_RE, MESH_IE, inv_det,
    norm=colors.LogNorm(vmin=10**(0), vmax=10**3), cmap="turbo")
plt.colorbar(c1, ax=ax1, extend='both')
ax1.set_xlim(min_re, max_re)
ax1.set_ylim(min_ie, max_ie)
ax1.set_aspect('equal')
ax1.set_title('1st', fontsize=20)

# ========== #

sign = cmath.exp(1j * cmath.pi)

inv_det = np.zeros_like(MESH_RE)
i_ie = 0
for ie in IMAG_E:
    i_re = 0
    for re in REAL_E:
        det = np.linalg.det(arr(re, ie, sign))
        inv_det[i_ie, i_re] = np.abs(det)
        i_re += 1
    #
    i_ie += 1 
#

c2 = ax2.pcolor(
    MESH_RE, MESH_IE, inv_det,
    norm=colors.LogNorm(vmin=10**(0), vmax=10**3), cmap="turbo")
plt.colorbar(c2, ax=ax2, extend='both')
ax2.set_xlim(min_re, max_re)
ax2.set_ylim(min_ie, max_ie)
ax2.set_aspect('equal')
ax2.set_title('2nd', fontsize=20)

plt.suptitle(
    r'$V_0=$' + f' {V0}, ' + r'$V_1=$' + f' {V1}, '
    + r'$a=$' + f' {RA}, ' + r'$b=$' + f' {RB}, ' + r'$\sqrt{2m}/\hbar=1$', fontsize=20)

plt.savefig("quantum_E.png", format="png", dpi=500)

plt.show()