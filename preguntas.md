# server.js linea 18 =  app.use(express.static("src/controllers/public"));
# No existe "src/controllers/public"
Juan Manuel revisará si es necesario.








#  -------------------- RESUELTAS --------------------------------------------------------------------------------

# Cuando ejecutamos npm run start ¿Donde esta el script start?
Al usar Express buscará el fichero server.js y lo ejecutará por defecto sin tener que existir el script start. 

# ¿Porqué no actualiza package.json cuando instalo Typescript?
Typescript es incompatible con Sequalize. 
En ejemplo de Fazt también instala Typescript y no se refleja en el package.json.

# ¿Porque esta index.js en la carpeta models?
Lo usa Sequalize para iniciarse
