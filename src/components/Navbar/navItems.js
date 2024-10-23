export const navItems = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Productos",
    path: "/products",
  },
];

export function getNavItems(isLoggedIn) {
  return isLoggedIn
    ? [
        ...navItems,
        {
          name: "Usuarios",
          path: "/users",
        },
      ]
    : [
        ...navItems,
        {
          name: "Iniciar Sesión",
          path: "/login",
        },
      ];
}
