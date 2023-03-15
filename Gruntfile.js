module.exports = function(grunt) {

    // Configuración de la tarea
    grunt.initConfig({
      createEntities: {
        options: {
          // opciones para la tarea createEntities
        }
      }
    });
  
    // Definición de la tarea
    grunt.registerTask('createEntities', function() {
        const data = grunt.file.readJSON('aris.json');
        console.log(`Creating entities for ${data} years old)...`);
        data.array.forEach(element => {
            console.log(element)
        });
        // Resto del código de la tarea
      });
      
  
    // Carga de plugins
    // grunt.loadNpmTasks('nombre-del-plugin'); // aquí se cargarían los plugins necesarios
  
    // Registro de tareas por defecto
    grunt.registerTask('default', ['createEntities']);
  
  };
  