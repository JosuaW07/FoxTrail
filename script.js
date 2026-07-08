//Data
const POSTEN = [
  {
    nr: '01', ort: 'Kesselhaus',
    rätsel: '„Einst brodelte hier die Hölle – zwei Kamine spuckten Dampf für tausend Maschinen. Heute flackern Kinolichter wo früher Feuer brannte. Ich bin das Herz einer toten Fabrik, die nie ganz gestorben ist… "',
    frage: 'Wo würde sich hier ein Tour de France Fan wohl fühlen?',
    antwort: ['bike world', 'bikeworld'],
    tipps: ['Schau dich im Kesselhaus um – gibt es Läden dort drin?', 'Tour de France → Fahrräder → Velo…', 'Es ist ein Fahrradgeschäft im Gebäude.']
  },
  {
    nr: '02', ort: 'Bahnhof Unterführung',
    rätsel: 'Ha! Du glaubst, du bist mir auf der Spur? Dann beweise es! Ich bin der Knotenpunkt, durch den täglich Tausende strömen – aber niemand bleibt. Stahl auf Stahl, Strom im Draht, Abfahrt in 2 Minuten.\n\nGeh vom Kesselhaus durch die Unterführung des Bahnhofs Winterthur. Begib dich zum zweiten Bahnsteig.',
    frage: 'Welche Zahl siehst du am zweiten Bahnsteig?',
    antwort: ['67'],
    tipps: ['Schau auf die Schilder direkt am Bahnsteig.', 'Es ist eine zweistellige Zahl.', 'Schau auf das grosse Bahnsteigschild selbst.']
  },
  {
    nr: '03', ort: 'Casino Theater',
    rätsel: '„Der Name dieses Ortes führt dich in die Irre: Du findest hier weder Spielautomaten noch Pokertische, sondern Pointen, Comedy und Theater auf den Brettern, die die Welt bedeuten. "',
    frage: 'Welches Wort prangt gross in schwarz über dem Eingangsportal?',
    antwort: ['theater', 'theatre'],
    tipps: ['Steh direkt vor dem Haupteingang und schau nach oben.', 'Es ist ein einzelnes deutsches Wort.', 'Es beschreibt, was in diesem Gebäude stattfindet.']
  },
  {
    nr: '04', ort: 'Rathaus, Marktgasse 20',
    rätsel: 'Fast hast du mich. FAST. Ich bin ein Gebäude der Macht – und doch gehöre ich dem Volk. Mein Inneres verbirgt einen Lichthof, den die meisten übersehen. Neorenaissance, Arkaden, und eine Stille die täuscht.\n\nGeh zur Marktgasse 20, durch den Rathausdurchgang.',
    frage: 'Wie viele Arkadenbögen überspannen den Rathausdurchgang? (Nur die Bögen direkt über dir)',
    antwort: ['3', 'drei'],
    tipps: ['Steh mitten im Durchgang und schau senkrecht nach oben.', 'Zähle nur die Bögen, die den Gang überdachen.', 'Es sind weniger als fünf Bögen.']
  },
  {
    nr: '05', ort: 'Stadtkirche',
    rätsel: '„Meine zwei Türme überblicken alles, doch läuten tut nur einer. "',
    frage: 'Welche Farbe hat das Innere des Zifferblattes?',
    antwort: ['blau', 'blue'],
    tipps: ['Schau an der Kirchenfassade nach oben zur Uhr.', 'Es ist eine kühle Farbe – denk an Himmel oder Meer.', 'Die Farbe beginnt mit B.']
  },
  {
    nr: '06', ort: 'Gewerbemuseum',
    rätsel: '„Ich bin kein Ort für alten Staub, sondern für Handwerk, Design und Stoffe. In meinem Inneren schlägt das Herz der Zeit – tickend, ratternd und mechanisch. An meiner Fassade prangt eine Uhr, die alle Blicke auf sich zieht. "',
    frage: 'Welches Wort steht auf dem Zifferblatt der Fassadenuhr?',
    antwort: ['gewerbemuseum'],
    tipps: ['Schau direkt auf die grosse Uhr an der Gebäudefassade.', 'Das Wort ist gleichzeitig der Name des Gebäudes.', 'Es beginnt mit „G“ und hat 13 Buchstaben.']
  },
  {
    nr: '07', ort: 'Fischmädchen-Brunnen',
    rätsel: '„Ich stehe mitten in der Altstadt auf dem Neumarkt und halte stolz meine Beute fest. Das Wasser fliesst, doch ich bewege mich nie. "',
    frage: 'In welche Himmelsrichtung blickt das Fischmädchen?',
    antwort: ['süden', 'sueden', 'süd', 'south'],
    tipps: ['Stell dich neben den Brunnen und schau in dieselbe Richtung wie die Figur.', 'Es ist die Richtung, die dem Norden gegenüberliegt.', 'Die Figur blickt Richtung Süden.']
  },
  {
    nr: '08', ort: 'Kesselhaus (Finale)',
    rätsel: 'NEIN! Das kann nicht sein! Du… du hast alle meine Rätsel gelöst?!\n\nGut. Dann lass mich dir ein letztes Geheimnis verraten: Ich war die ganze Zeit dort, wo alles begann. Wo Feuer zu Licht wurde und Dampf zu Träumen.\n\nKehre zurück zum Ort deines Beginns. Wo zwei Kamine in den Himmel ragen und Kino wo einst Stahl war.',
    frage: 'Was ist die Farbe der beiden grossen Kamine am Kesselhaus (von aussen)?',
    antwort: ['rot', 'rotbraun', 'rot/rotbraun'],
    tipps: ['Schau von aussen auf die zwei grossen Kamine.', 'Es ist eine warme, erdige Farbe.', 'Die Kamine sind rötlich-braun gefärbt.']
  }
];

const state = {};
let solvedCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const quiz = document.getElementById('quiz');

  POSTEN.forEach((p, i) => {
    const num = i + 1;
    state[num] = { tries: 0, solved: false, revealed: false, tippIndex: 0 };

    const card = document.createElement('div');
    card.className = 'question' + (num === 1 ? ' active' : ''); // Nur die erste Frage ist sichtbar
    card.id = 'q' + num;

    card.innerHTML = `
      <div class="posten-header">
        <span class="terminal">POSTEN ${p.nr} - ${p.ort}</span>
      </div>
      <p class="rätsel-text terminal">${p.rätsel.replace(/\n/g, '<br><br>')}</p>
      <p class="sub-question terminal">&gt; ${p.frage}</p>
      <div class="feedback-box" id="fb${num}"></div>
      <div class="input-row">
        <span class="prompt terminal">&gt;&nbsp;</span>
        <input 
          type="text" 
          id="input${num}" 
          class="terminal"
          placeholder="Antwort…" 
          autocomplete="off" 
          autocorrect="off" 
          autocapitalize="none" 
          spellcheck="false"
        >
        <button class="submit-btn" onclick="checkAnswer(${num})">OK</button>
        <button class="tipp-btn" id="tippbtn${num}" onclick="showTipp(${num})" title="Tipp">💡</button>
        <span id="status${num}" class="status"></span>
      </div>
      <div class="tries-row"><span id="tries${num}" class="tries-label"></span></div>
    `;
    quiz.appendChild(card);

    const inp = card.querySelector('input');
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkAnswer(num);
    });
    inp.addEventListener('input', () => clearWrongFeedback(num));
  });
});

function checkAnswer(num) {
  const s = state[num];
  if (s.solved || s.revealed) return;

  const input = document.getElementById('input' + num);
  const val = input.value.trim().toLowerCase();
  if (!val) return;

  const accepted = POSTEN[num - 1].antwort.map(a => a.toLowerCase());
  const isRight = accepted.includes(val);

  if (isRight) {
    markSolved(num);
  } else {
    s.tries++;
    updateTriesLabel(num);
    shakeInput(num);

    if (s.tries >= 5) {
      revealAnswer(num);
    } else {
      showFeedback(num, `✘ Falsch. Noch ${5 - s.tries} Versuch${5 - s.tries === 1 ? '' : 'e'} übrig.`, 'wrong');
    }
  }
}


function markSolved(num) {
  const s = state[num];
  s.solved = true;

  const input = document.getElementById('input' + num);
  const status = document.getElementById('status' + num);

  input.disabled = true;
  status.textContent = '✔';
  status.className = 'status correct';

  showFeedback(num, '✔ Richtig! Weiter so.', 'correct');
  hideTippBtn(num);
  advanceProgress(num);
}

function revealAnswer(num) {
  const s = state[num];
  s.revealed = true;
  const p = POSTEN[num - 1];

  const input = document.getElementById('input' + num);
  const status = document.getElementById('status' + num);

  input.value = p.antwort[0];
  input.disabled = true;
  status.textContent = '⚡';
  status.className = 'status revealed';

  showFeedback(num, `⚡ 5 Versuche aufgebraucht. Lösung: <strong>${p.antwort[0]}</strong>`, 'revealed');
  hideTippBtn(num);
  advanceProgress(num, true);
}

function advanceProgress(num, slow = false) {
  solvedCount++;
  document.getElementById('solved-count').textContent = solvedCount;
  document.getElementById('progress-fill').style.width = (solvedCount / 8 * 100) + '%';

  const delay = slow ? 900 : 350;
  const next = document.getElementById('q' + (num + 1));

  if (next) {
    setTimeout(() => {
      next.classList.add('active'); // Nächstes Terminal-Fenster öffnen
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const inp = document.getElementById('input' + (num + 1));
      if (inp) inp.focus();
    }, delay);
  } else {
    const finale = document.getElementById('finale');
    setTimeout(() => {
      finale.style.display = 'block';
      finale.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, delay);
  }
}


function showTipp(num) {
  const s = state[num];
  if (s.solved || s.revealed) return;

  const tipps = POSTEN[num - 1].tipps;
  if (s.tippIndex >= tipps.length) return;

  const tipp = tipps[s.tippIndex];
  s.tippIndex++;

  const remaining = tipps.length - s.tippIndex;
  const suffix = remaining > 0 ? ` (${remaining} weiterer Tipp verfügbar)` : ' (Keine weiteren Tipps.)';

  showFeedback(num, `💡 Tipp ${s.tippIndex}/${tipps.length}: ${tipp}${suffix}`, 'tipp');

  if (s.tippIndex >= tipps.length) {
    const btn = document.getElementById('tippbtn' + num);
    if (btn) btn.disabled = true;
  }
}


function showFeedback(num, html, type) {
  const fb = document.getElementById('fb' + num);
  fb.innerHTML = html;
  fb.className = 'feedback-box ' + type;
}

function clearWrongFeedback(num) {
  const fb = document.getElementById('fb' + num);
  if (fb.classList.contains('wrong')) {
    fb.className = 'feedback-box';
    fb.innerHTML = '';
  }
}

function updateTriesLabel(num) {
  const el = document.getElementById('tries' + num);
  if (el) el.textContent = `${state[num].tries} / 5 Versuche`;
}

function hideTippBtn(num) {
  const btn = document.getElementById('tippbtn' + num);
  if (btn) btn.style.display = 'none';
}

function shakeInput(num) {
  const ir = document.getElementById('input' + num);
  if (!ir) return;
  ir.style.animation = 'none';
  void ir.offsetWidth;
  ir.style.animation = 'shake 0.3s';
}