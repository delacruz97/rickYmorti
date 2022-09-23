//El "try", "catch" y "finally". Son los que se usan para manejar errores.

// el async/await es una función que nos permite ejecutar una función asíncrona.

const getUsers = async () => {
  //el try es para cuando la peticion se aya realizado correctamente
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const users = await res.json();
    console.log(users);
    const todo = users.results;

    //utilizando un for of para recorrer el array
    todo.forEach((element) => {
      const article = document.createRange()
        .createContextualFragment(/* Escribiendo codigo html */ `
       
        <article class="contenedor">
        <section>
            <h3 class="center1">${element.name}</h3>
            <div class="img">
            <img class="imagen"
            src="${element.image}"
            alt="personaje"
        />
            </div>
            <p>
                <h3 class="center">${element.status}</h3>
                <h3 class="center2">${element.species}</h3>
            </p>
        </section>
    </article>
        
        `);
      const main = document.querySelector("main");
      main.append(article); // con append, añado todo el contenido a mi vista
    });

    //el catch es para cuando la peticion se aya realizado incorrectamente
  } catch (error) {
    alert(error);
    //el finally es para cuando la peticion se aya realizado correctamente o incorrectamente
  } finally {
    console.log("oleeeee");
  }
};
getUsers();
