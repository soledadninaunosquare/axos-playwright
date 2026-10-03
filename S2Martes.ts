function evaluarPrueba(resultado: string): void {
  if (resultado === "Pass") {
    console.log("Pass");
  } else {
    console.log("Sorry, we are on Tuesday");
  }
}
 
evaluarPrueba("Pass");
evaluarPrueba("Fail");