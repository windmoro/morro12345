let ad = prompt('Adinizi yazin');
let parol = prompt('Sifrenizi yazin');

switch (true) {
    case ad == 'Morro' && parol == 'Morro123':
        netice = 'Siz Admin olaraq daxil oldunuz, Morro-Sama.'
        break;
    case ad == 'Zeki' && parol == 'Zeki123':
        netice = 'Siz Minecraft Efsanesi olaraq daxil oldunuz, Zeki4143.'
        break;
    case ad == 'Ferrotti' && parol == 'Ferit123':
            netice = 'Siz futbolcu olaraq daxil oldunuz, Cristiano Ferrotti.'
            break;
    case ad == 'Aisha' && parol == 'Aisha123':
            netice = 'Siz tesla sahibi olaraq daxil oldunuz, Asiha.'
            break;   
    case ad == 'Imamali' && parol == 'Imo123':
            netice = 'Siz En gözəl komputerli olaraq daxil oldunuz, Imamali.'
            break; 
    case ad == 'Erlams' && parol == 'Erlams123':
            netice = 'Siz KİNG daxil oldunuz, Erlams.'
            break; 

    default:
    netice = 'Istifadeci adiniz veya sifreniz sehvdir.'
        break;
}
document.getElementById('morro').innerHTML = netice;