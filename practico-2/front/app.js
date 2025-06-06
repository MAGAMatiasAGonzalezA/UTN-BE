const list = document.querySelector("ul")
const form = document.querySelector("#book-form")
const popup = document.querySelector(".popup")
const formEdit = document.querySelector("#book-form-edit")
const closePopup = document.querySelector(".close-button-edit")

const BASE_API_URL = 'http://localhost:1234/api/books'

let idToEdit = null

const getAllBooks = async () => {
    const response = await fetch(BASE_API_URL)

    const responseToJson = await response.json()

    list.innerHTML = ""

    responseToJson.data.forEach(book => {
        const li = document.createElement("li")
        const { title, author, publishedYear, genre, avaible } = book
        li.innerHTML = `
      <strong>${title}</strong> 
      ${author} - ${publishedYear} - ${genre} - ${avaible ? 'Disponible' : 'No disponible'}
      <div>
        <button class="btn-update" onclick="createBookToUpdate('${book._id}', '${title}', '${author}','${publishedYear}','${genre}', '${avaible}')">Editar</button>
        <button class="btn-delete" onclick="deleteBook('${book._id}')">Borrar</button>
      </div>
    `
        list.appendChild(li)
    });
}

const insertNewBook = async (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const publishedYear = document.querySelector("#publishedYear").value
    const genre = document.querySelector("#genre").value
    const avaible = document.querySelector("#avaible").value === "true"

    const newBook = { title, author, publishedYear, genre, avaible }
    newBook.publishedYear = Number(publishedYear)

    const response = await fetch(BASE_API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newBook)
    })

    if (response.ok) {
        document.querySelector("#title").value = ""
        document.querySelector("#author").value = ""
        document.querySelector("#publishedYear").value = ""
        document.querySelector("#genre").value = ""
        document.querySelector("#avaible").value = ""
    }

    getAllBooks()
}

const deleteBook = async (id) => {
    console.log(id)
    if (confirm("Estas seguro que desea borrar el libro")) {
        const response = await fetch(`${BASE_API_URL}/${id}`, {
            method: "DELETE"
        })
    }
    getAllBooks()
}

const createBookToUpdate = (id, title, author, publishedYear, genre, avaible) => {
    popup.classList.remove("hidden");

    const fields = {
        titleEdit: title,
        authorEdit: author,
        publishedYearEdit: publishedYear,
        genreEdit: genre,
        avaibleEdit: avaible
    };

    for (const [id, value] of Object.entries(fields)) {
        const input = document.getElementById(id);
        if (input) input.value = value;
    }

    idToEdit = id;
}

const updateBook = async (e) => {
    e.preventDefault()

    const newBook = {
        title: document.querySelector("#titleEdit").value,
        author: document.querySelector("#authorEdit").value,
        publishedYear: document.querySelector("#publishedYearEdit").value,
        genre: document.querySelector("#genreEdit").value,
        avaible: document.querySelector("#avaibleEdit").value === "true"
    }

    try {
        const response = await fetch(`${BASE_API_URL}/${idToEdit}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook)
        })

        popup.classList.add("hidden")
        idToEdit = null
        getAllBooks()
    } catch (error) {
        console.log("Error al actualizar el Libro")
    }

}

const handleClosePopup = () => {
    popup.classList.add("hidden")
}

form.addEventListener("submit", insertNewBook)
closePopup.addEventListener("click", handleClosePopup)
formEdit.addEventListener("submit", updateBook)

getAllBooks()