function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForm(formText)

        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8081/meaning?text=${formText}`)
        .then(res => res.json())
        .then(function(res) {
            const sentences = res.sentence_list[1].text + " " + res.sentence_list[3].text + " " + res.sentence_list[7].text + " " + res.sentence_list[10].text 

            document.getElementById('sentences').innerHTML = `${sentences}`
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
        }).catch((error) => console.log("error", error));
    

    }

export { handleSubmit }


