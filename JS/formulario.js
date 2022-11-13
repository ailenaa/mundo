  document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("contactoform").addEventListener('submit', validarFormulario);
        });

        function validarFormulario(evento) {
            evento.preventDefault();
            var usuario = document.getElementById('nombre').value;
            if (usuario.length < 3) {
                alert('Nombre muy corto');
                return;
            }
            var clave = document.getElementById('apellido').value;
            if (clave.length < 2) {
                alert('Complete el apellido');
                return;
            }

            this.submit();
        }

       