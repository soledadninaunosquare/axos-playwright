interface CasoDePrueba {
  id: number;
  titulo: string;
  estado: "Pass" | "Fail";
}

const casoDePrueba: CasoDePrueba = {
  id: 1,
  titulo: "Verificar inicio de sesión",
  estado: "Pass",
};

console.log(casoDePrueba);
