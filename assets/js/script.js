


async function prencher() {
     let req = await fetch("./assets/json/data.json")
     let resp = await req.json()
     resp.forEach( (i)  => {
          let element = document.querySelector(".emprego")

          let clone = element.cloneNode(true)
          clone.classList.remove("emprego")
          clone.classList.add("empregoClone")


          if(i.new == false && i.featured== false){
               let classNew = clone.querySelector(".new")
               let classfeatured = clone.querySelector(".featured")
               let classBar = clone.querySelector(".bar")

               classNew.style.display = "none"
               classfeatured.style.display = "none"
               classBar.style.display = "none"
          }
          if( i.featured== false){
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



          let lado2 = document.querySelector(".lado2")

          i.languages.forEach((e) => {
               let spanLado2 = document.createElement("span")
               lado2.append(spanLado2)
               spanLado2.innerHTML = e
          })
          
          



       
          classEmpregos.append(clone)

     })
}
prencher()