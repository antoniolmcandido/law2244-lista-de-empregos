function prencher(x) {
     x.forEach((i) => {
          let element = document.querySelector(".emprego")

          let clone = element.cloneNode(true)
          clone.classList.remove("emprego")
          clone.classList.add("empregoClone")

          if (i.new == false && i.featured == false) {
               let classNew = clone.querySelector(".new")
               let classfeatured = clone.querySelector(".featured")
               let classBar = clone.querySelector(".bar")

               classNew.style.display = "none"
               classfeatured.style.display = "none"
               classBar.style.display = "none"
          }
          if (i.featured == false) {
               let classfeatured = clone.querySelector(".featured")
               let classBar = clone.querySelector(".bar")
               classfeatured.style.display = "none"
               classBar.style.display = "none"
          }

          let classEmpregos = document.querySelector(".empregos")

          let contraador = clone.querySelector(".contratante")

          let cargo = clone.querySelector(".contratado")

          let dataPost = clone.querySelector(".datapPoste")

          let periodo = clone.querySelector(".periodo")

          let local = clone.querySelector(".local")

          let imgLogo = clone.querySelector(".imgLogo")

          contraador.innerHTML = i.company

          cargo.innerHTML = i.position

          dataPost.innerHTML = i.postedAt

          periodo.innerHTML = i.contract

          local.innerHTML = i.location

          imgLogo.setAttribute("src", i.logo)

          let lado2 = clone.querySelector(".lado2")

          i.languages.forEach((e) => {
               let spanLado2 = document.createElement("span")
               lado2.append(spanLado2)
               spanLado2.innerHTML = e
               spanLado2.classList.add(e)
          })
          i.tools.forEach((e) => {
               let spanLado2 = document.createElement("span")
               lado2.append(spanLado2)
               spanLado2.innerHTML = e
               spanLado2.classList.add(e)
          })

          let spanLado2 = document.createElement("span")

          lado2.append(spanLado2)

          spanLado2.classList.add(i.level)
          spanLado2.innerHTML = i.level

          let spanLado3 = document.createElement("span")

          lado2.append(spanLado3)
          spanLado3.classList.add(i.role)
          spanLado3.innerHTML = i.role

          classEmpregos.append(clone)


     })
}

let span = document.querySelectorAll(".lado1 span")

console.log(span)

async function alocarelements() {
     let req = await fetch("./assets/json/data.json")
     let resp = await req.json()
     prencher(resp)
}

alocarelements()


