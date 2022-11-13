async function fetchData() {
  
  const apiUrl = "https://yesno.wtf/api"
  const options = {
    method: 'GET'
  }

  const res = await fetch(apiUrl, options)
  const record = await res.json();

  console.log('record', record)

  document.getElementById("answer").innerHTML = record.answer
  document.getElementById("image").src = record.image

}

fetchData();