document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form').onsubmit = () => {
        
        //initializing new request
        const request = new XMLHttpRequest();
        const base = document.querySelector('#base_curr').value;
        const currency = document.querySelector('#currency').value;
        request.open('POST', '/convert');

        //Callback function for when request completes
        request.onload = () => {

            //Extract JSON data from request
            const data = JSON.parse(request.responseText);

            //Update request div 
            if (data.success){
                const contents = `1 ${base} is equal to ${data.rate} ${currency}.`
                document.querySelector('#result').innerHTML = contents;
            }
            else{
                document.querySelector('#result').innerHTML = 'There was an error';
            }
        }
        
        //Add data to send request
        const data = new FormData();
        data.append('currency', currency);
        data.append('base', base);

        //Send data
        request.send(data);
        return false;

    }
})