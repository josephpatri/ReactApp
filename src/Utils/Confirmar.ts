import Swal from "sweetalert2";

export default function confirmar(
  onConfirm: any,
  titulo: string = "¿Desea borrar el registro?",
  textoBotonConfirmacion: string = "Borrar"
) {
    Swal.fire({
        title: titulo,
        icon: "warning",
        confirmButtonColor: '#3085d6',
        confirmButtonText: textoBotonConfirmacion,
        showCancelButton: true,
        cancelButtonColor: '#d33'
    }).then(result => {
        if(result.isConfirmed){
            onConfirm();
        }
    })
}
