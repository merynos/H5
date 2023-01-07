var user = 'niemcu';
var domena = 'ymail.com';
var dodatkowe = '?subject=Wpisz temat&body=Wpisz coś'; //co%9C:%0A
var opis = 'Wyślij do mnie list';
document.write('<a hr' + 'ef="mai' + 'lto:' + uzytkownik + '\x40' + domena + dodatkowe + '">');
if (opis) document.write(opis + '<'+'/a>');
else document.write(uzytkownik + '\x40' + domena + '<'+'/a>');