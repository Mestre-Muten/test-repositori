//JSON amb totes les paraules possibles
let paraules = {"cel": "cel","celic": "cèlic","cell": "cell","cescle": "cescle","cicle": "cicle","ciclic": "cíclic","ciclo": "cicló","cicloide": "cicloide","ciclolisi": "ciclòlisi","cili": "cili","cilici": "cilici","cisell": "cisell","clec": "clec","clic": "clic","clisi": "clisi","cloccloc": "cloc-cloc","clos": "clos","closell": "closell","codicil": "codicil","codillo": "codillo","codol": "còdol","codolell": "codolell","codoli": "codolí","codolos": "codolós","col": "col","coledoc": "colèdoc","colic": "còlic","colis": "colís","coll": "coll","colleccio": "col·lecció","collisio": "col·lisió","collo": "colló","collodio": "col·lodió","colloide": "col·loide","colos": "colós","coscoll": "coscoll","cossiol": "cossiol","cossol": "cossol","decil": "decil","del": "del","delco": "delco","delecio": "deleció","deli": "deli","delicios": "deliciós","dicli": "diclí","diesel": "dièsel","dileccio": "dilecció","diol": "diol","discol": "díscol","docil": "dòcil","dol": "dol","doll": "doll","dolos": "dolós","eclosio": "eclosió","edicle": "edicle","edil": "edil","edilici": "edilici","eleccio": "elecció","elis": "elis","elisi": "elisi","elisio": "elisió","ell": "ell","eloi": "eloi","els": "els","eolic": "eòlic","escocell": "escocell","escoli": "escoli","escoliosi": "escoliosi","idilli": "idil·li","idillic": "idíl·lic","idol": "ídol","ili": "ili","illes": "il·lès","iol": "iol","isocli": "isoclí","isosceles": "isòsceles","leo": "leo","les": "les","lesio": "lesió","lidi": "lidi","lies": "lies","lilos": "lilós","lis": "lis","lisi": "lisi","llec": "llec","llecol": "llécol","lledo": "lledó","llei": "llei","lleo": "lleó","lli": "lli","llis": "llis","lliscos": "lliscós","lliso": "llisó","llisol": "llisol","llisso": "llissó","llissol": "llissol","lloc": "lloc","llos": "llos","llosc": "llosc","locio": "loció","loess": "loess","los": "los","loss": "löss","ocel": "ocel","ocell": "ocell","oleic": "oleic","oli": "oli","olios": "oliós","ossicle": "ossicle","seleccio": "selecció","sello": "selló","sessil": "sèssil","siclo": "sicló","sil": "sil","sile": "silè","silice": "sílice","silici": "silici","silicic": "silícic","silicosi": "silicosi","silil": "silil","socol": "sòcol","sol": "sol o sòl","solc": "solc","soleid": "soleid","soleids": "soleids","solell": "solell","solellos": "solellós","soli": "soli","solid": "sòlid","soll": "soll","solo": "solo","solod": "solod","sols": "sols"};

window.onload = function(){
  // 1.Introdueixo els listeners de la pàgina i els botons que els necessiten
  // Listener pàgina oberta
  document.addEventListener('keydown', introduirLletra);
  // Listener botons
  let boto_esborrar = document.getElementById('delete-button');
  boto_esborrar.addEventListener('click', esborrarUltimaLletra);

  let boto_introduir = document.getElementById('submit-button');
  boto_introduir.addEventListener('click', introduirParaula);

  let teclat = document.getElementsByClassName('hex-link');
  // Com que hi ha diverses tecles a la classe, utilitzem un bucle for per capturar cada listener
	for(let i=0; i < teclat.length; i++){
    teclat[i].addEventListener('click', introduirTecla);
  }

  let boto_guardar = document.getElementById('save-button');
  boto_guardar.addEventListener('dblclick', guardar);

  // Quan recarregui la pàgina, es carregaran les paraules encertades anteriorment
  document.getElementById("discovered-text").innerHTML  = localStorage.getItem("paraules");
  // Usem les comes per partir les diferents paraules i aconseguir el número d'encerts
  document.getElementById("letters-found").innerHTML = localStorage.getItem("paraules").split(",").length-1;

  // 3. Funcions de suport
  // Funció que permet introduir a l'element "test-word" les lletres establertes al patro.
  function introduirLletra(e) {
    let tecla = event.key;
    let patro = /^[c|d|e|l|i|o|s]/;
    if(patro.test(tecla)){
      document.getElementById("test-word").innerHTML += tecla;
    }
  }
  // Funció esborra la darrera llatra introduida a "test-word"
  function esborrarUltimaLletra() {
    let text = document.getElementById("test-word").innerText;
    // REQUISIT: Si l’usuari no ha introduït cap paraula, no s’haurà de fer res.
    if (text.length > 0){
      let nouText = text.slice(0, text.length - 1);
      document.getElementById("test-word").innerHTML = nouText;
    }
  }
// Funció per incloure la paraula valor a la llista d'encerts
  function introduirParaula() {
    let paraula = document.getElementById("test-word").innerText;
    // REQUISIT: Si l’usuari no ha introduït cap paraula, no s’haurà de fer res.
    if (paraula.length > 0){
      //  REQUISIT: que la paraula inclogui la lletra "l" i es trobi al JSON
      if (paraula.includes("l") && paraules.hasOwnProperty(paraula)) {
        document.getElementById("letters-found").innerHTML ++;
        document.getElementById("discovered-text").innerHTML += paraules[paraula] + ", ";
        document.getElementById("test-word").innerHTML = "";
        alert("Enhorabona, la paraula " + paraula + " es troba a la llista");
      } else{
        alert("La paraula " + paraula + " no es troba a la llista");
      }
    }
  }
    // Funció per introduir el valor de la tecla premuda al camp corresponent
  function introduirTecla() {
    document.getElementById("test-word").innerHTML += this.innerText.toLowerCase();
  }
  // Funció per emmgatzemar les paraules encertades
  function guardar(){
    localStorage.setItem("paraules", document.getElementById("discovered-text").innerHTML);
  }

}
