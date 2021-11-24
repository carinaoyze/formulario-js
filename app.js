const formulario = document.querySelector('#formu');
const tabela = document.querySelector('#tabelaPendentes');
const inputNome = document.querySelector('#nome');
const inputModelo = document.querySelector('#modelo');
const inputPessoa = document.querySelector('#pessoa');
const inputDatapen = document.querySelector('#datapen');
const inputFt = document.querySelector('#ft');
const inputProblem = document.querySelector('#problem');


// adiciona uma linha a tabela
formulario.addEventListener('submit', function(){
    event.preventDefault();

    let inputNomeValue = inputNome.value.trim();
    let inputModeloValue = inputModelo.value.trim();
    let inputPessoaValue = inputPessoa.value.trim();
    let inputDatapenValue = inputDatapen.value.trim();
    let inputProblemValue = inputProblem.value.trim();
    const trNova = document.createElement('tr');
    /*trNova.innerHTML = `
            <td><img height="200px" id="foto" src=""></td>
            <td>${inputNomeValue}</td>
            <td>${inputModeloValue}</td>
            <td>${inputPessoaValue}</td>
            <td>${inputDatapenValue}</td>
            <td>${inputProblemValue}</td>
            <td>
            <button class="btn btn-success">
            Concluir
            </button>
            </td>
            <td>
            <button class="btn btn-warning">
            Editar
            </button>
            </td>
            <td>
            <button class="btn btn-danger">
            Excluir
            </button>
            </td>`;
    tabela.append(trNova);    
       
    const fto = document.querySelector('#foto');
     */
    const fileInput = inputFt.files || [];
    const files = fileInput.length;
    let a = 0;
    while ( a < files) {
        var filess = fileInput[a];
        alert(filess.name);
        a++;
        for (let i = 0; i < fileInput.length; i++) {
            let file_img = fileInput[i].name;
            let id = document.createElement('td');
            let idRow = i + parseInt(1);
            let tdimg = document.createElement('td');
            let imgg = document.createElement('img');
            let nome = document.createElement('td');
            
            let modelo = document.createElement('td');
            let cliente = document.createElement('td');
            
            let data = document.createElement('td');
            let problema = document.createElement('td');
            
            let tdbutsuc = document.createElement('td');
            let tdbuted = document.createElement('td');
            let tdbutexc = document.createElement('td');
            let buttonSuc = tdbutsuc.innerHTML = `<button class="btn btn-success">
            Concluir</button>`;
            let buttonEdit = tdbuted.innerHTML = `<button class="btn btn-warning">
            Editar</button>`;
            let buttonExcl = tdbutexc.innerHTML = `<button class='btn btn-danger'>
            Excluir</button>`;
            
            let reader  = new FileReader();
            reader.addEventListener("load", function () {
                tabela.append(trNova);    
                trNova.append(id);
                id.append(idRow);
                trNova.append(tdimg);
                tdimg.append(imgg);
                imgg.setAttribute("src", reader.result);
                imgg.setAttribute("height", "200px");
                trNova.append(nome);
                nome.append(inputNomeValue);
                trNova.append(modelo);
                modelo.append(inputModeloValue);
                trNova.append(cliente);
                cliente.append(inputPessoaValue);
                trNova.append(data);
                data.append(inputDatapenValue);
                trNova.append(problema);
                problema.append(inputProblemValue);
                trNova.append(tdbutsuc);
                trNova.append(tdbuted);
                trNova.append(tdbutexc);
            });
            reader.readAsDataURL(filess);
        }
    }      
    formulario.reset();
});

// exclusao de dados

tabela.addEventListener('click', function(){
        let temclasseExcluir = event.target.classList.contains('btn-danger');
        if(temclasseExcluir){
            const btnExcluir = event.target;
            const tr= btnExcluir.closest('tr').remove();
        }
});

//edicao de dados
tabela.addEventListener('click', function(event){
let temClasseEditar = event.target.classList.contains('btn-warning');
if(temClasseEditar){
    const btnEditar = event.target;
    let isConteudoEditavel = false;

    if(btnEditar.textContent.trim() == 'Editar'){ //trim para retirar espaços que pode conter na tag HTML
        btnEditar.textContent = 'Salvar Edição';
        isConteudoEditavel = true;
    }
    else{
        btnEditar.textContent = 'Editar';
    }

    let tdTio = btnEditar.parentElement.previousElementSibling;

    while(tdTio !== null){
        tdTio.contentEditable = isConteudoEditavel;
        tdTio.classList.toggle('editavel');
        tdTio = tdTio.previousElementSibling;
    }
   
}

});