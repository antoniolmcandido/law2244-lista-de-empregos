


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

function prencherFilter(x){
     x.forEach( (i)  => {
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


 async  function clique(){
     let req = await fetch("./assets/json/data.json")
     let resp = await req.json()
     
     let front = resp.filter((v) => v.role === "Frontend")

     let react = resp.filter((v , i) => {
          for(let i of v.tools){
               if(i === "React"){
                    return true
               } else{
                    false
               }
          } 
     })

     console.log(react)

     let spans = document.querySelectorAll(".lado2 span")

     let emprego = document.querySelectorAll(".empregoClone")

     spans.forEach((c) =>{
          c.addEventListener("click" , () => {
               if(c.getAttribute("class") == "Frontend"){
                    emprego.forEach((i) => {
                         i.remove()
                    })
                    prencherFilter(front)
                    let divFilter = document.querySelector(".filtragem")
                    divFilter.classList.remove("filtragem")
                    divFilter.classList.add("filtragemjs")
               } 
               if(c.getAttribute("class") == "React"){
                    emprego.forEach((i) => {
                         i.remove()
                    })
                    prencherFilter(react)
                    let divFilter = document.querySelector(".filtragem")
                    divFilter.classList.remove("filtragem")
                    divFilter.classList.add("filtragemjs")
               } else{
                    emprego.forEach((i) => {
                         i.remove()

                    })
               }
          })
     })


     
}




prencher()

clique()

