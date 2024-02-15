const nameEl = document.getElementById('name');
const messageEl = document.getElementById('message');
const changeBtn = document.getElementById('change-btn');

const messages = [
  {
    name: 'पत्नी',
    message: 'आज हमारे शादी की सालगिरह है, और यह दिन मेरे लिए दुनिया का सबसे खास दिन है। इसी दिन हमें एक अटूट बंधन में बांध दिया गया था, और तब से हर पल एक सुंदर सपने जैसा रहा है। >>>>>',
  },
  {
    name: 'पत्नी',
    message: 'मुझे याद है उस दिन का, जब पहली बार मैंने तुम्हें देखा था। तुम इतनी खूबसूरत और मिलनसार थीं कि मेरा दिल धड़क उठा था। मैंने तभी जान लिया था कि तुम ही मेरी जिंदगी की साथी बनने वाली हो। और तुमने  मेरी उम्मीदों पर खरा उतरकर दिखाया। >>>>>',
  },
  {
    name: 'पत्नी',
    message: 'तुम मेरी जिंदगी का सबसे अनमोल उपहार हो। तुम मेरी मित्र, मेरी प्रेयसी, मेरी विश्वासपात्र और सबसे बढ़कर मेरी जीवनसाथी हो। तुम हर खुशी में मेरा साथ देती हो और हर दुख में मेरा हौसला बढ़ाती हो। तुम्हारे बिना मेरा जीवन अधूरा है। >>>>>>',
  },

  {
    name: 'पत्नी',
    message: 'इन 24 सालों में हमने साथ में बहुत कुछ देखा है। खुशियाँ, गम, सफलता, असफलता, हर पल हमने एक-दूसरे का हाथ थामा है। हमने एक-दूसरे को बदलते देखा है, बढ़ते देखा है, और हर बदलाव में हमने अपना प्यार और मजबूत होते देखा है। >>>>>',
  },

  {
    name: 'पत्नी',
    message: 'तुम मेरी प्रेरणा हो। तुम मुझे हर दिन बेहतर इंसान बनने की कोशिश करने के लिए प्रेरित करती हो। तुम्हारा प्यार, तुम्हारा विश्वास, मेरी ताकत है।>>>>',
  },

  {
    name: 'पत्नी',
    message: 'मुझे नहीं पता कि मैं तुम्हारे लिए कितना कुछ कह पाऊंगा। तुमसे मेरा प्यार शब्दों में बयां नहीं किया जा सकता। बस इतना कहूंगा कि मैं तुमसे बहुत प्यार करता हूं, और आज की तरह मैं हर साल इस दिन को तुम्हारे साथ मनाना चाहता हूं। >>>>>',
  },

  {
    name: 'छोटकी ',
    message: 'हैप्पी एनिवर्सरी, मेरी प्यारी छोटकी ',
  },

  {
    name: 'पत्नी',
    message: 'आपका प्यारा पति ARVIND SINGH ',
  },


];

let currentMessage = 0;

nameEl.textContent = messages[currentMessage].name;
messageEl.textContent = messages[currentMessage].message;

changeBtn.addEventListener('click', () => {
  currentMessage++;
  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }
  nameEl.textContent = messages[currentMessage].name;
  messageEl.textContent = messages[currentMessage].message;
});