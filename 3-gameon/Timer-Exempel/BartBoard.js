/* Konstruktorfunktionen BartBoard anropas med new d� vi vill skapa nya instanser av v�r "BartBoard"-applikation.
 * theText - Den text vi vill ska skrivas ut p� tavlan.
 * divId - id:t p� den divtag som kommer att bli denna instans tavla. 
 */
function BartBoard(theText, divId){
	
	var board = document.getElementById(divId); // Vi h�mtar ut tavlan som en nod.
	var charCount = 0; 							// R�knare f�r att h�lla koll p� vilken bokstav som ska skrivas ut.
	var intervalID = null; 						// H�r sparar vi undan det id vi f�r fr�n setInterval f�r att kunna stoppa utskriften n�r vi vill
	
	theText += " ";								// Vi l�gger till ett blanksteg efter sista tecknet f�r att f� en snygg utskrift					
	
	// Om div-taggen inte redan har en textnod s� skapar vi en och l�gger till den. 
	if(board.firstChild === null){
		board.appendChild(document.createTextNode(""));
	}
	
	// Vi kopplar h�ndelsen mousedown. Denna kod kommer allts� att k�ras d� anv�ndaren trycker ner musknappen.
	board.onmousedown = function(){
		
		// Vi startar en intervall-timer som kommer att k�ras en g�ng var 50e millisekund. Vi �r noga med att spara undan
		// v�rt v�rde s� att vi kan stoppa timern. 
		intervalID = setInterval(function(){
			// H�r l�gger vi till den bokstav som ligger p� position charCount i str�ngen och �kar sedan charCount med ett.
			board.firstChild.nodeValue += theText.charAt(charCount++);
			
			// Om vi kommit till slutet av str�ngen ska vi b�rja om.
			if(charCount >= theText.length){
				charCount = 0;
			}
				
		},50);
		
		// De tv� nedanst�ende raderna �r till f�r att se till att texten p� tavlan inte markeras n�r musknappen �r nedtryckt.
		board.onselectstart = function () { return false; }; // IE-fix f�r ovanst�ende.
		return false; 
	};
	
	// Detta event k�rs n�r anv�ndaren sl�pper musknappen. Det enda vi beh�ver g�ra h�r �r att stoppa timern.
	board.onmouseup = function(){

		clearInterval(intervalID);

	};
}


/* H�r har jag skrivit den kod som startar hela applikationen. 
 * Jag v�ljer att skapa tv� BartBoards men vi kan skapa hur m�nga som helst. 
 * Testa g�rna men gl�m inte att �ven skapa divtaggar i HTML-koden.
 * Anledningen till att jag manuellt skapar divtaggarna och inte l�ter applikationen g�ra det
 * �r att jag d� l�ttare kan styra var tavlorna kommer att skrivas ut.
  */
window.onload = function(){
	
	new BartBoard("I will not pollute the global object \"window\" more than necessary.", "board1");
	new BartBoard("Douglas Crockford doesn't use JavaScript libraries. They make his code less crossbrowser compatible.", "board2");
	// Douglas crockford doesn't wait for onDomReady, the dom waits for him....
	// 
};
