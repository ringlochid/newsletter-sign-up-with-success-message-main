function main(){
    const form_sign_in = document.getElementById("sign_in_form");
    const sign_in_panel = document.getElementById("sign-in-panel");
    
    function handle_sign_in(e){
        e.preventDefault();
        const fm = new FormData(form_sign_in)
        sign_in_panel.classList.toggle('is-open', false)
    }

    form_sign_in.addEventListener('submit', handle_sign_in);

}

document.addEventListener('DOMContentLoaded', main)