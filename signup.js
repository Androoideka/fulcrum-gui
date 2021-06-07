var mql = window.matchMedia('(max-width: 992px)');
var page;

// listen for load event in the window
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    page = document.getElementById('card-content');
    if (mql.matches) {
        page.innerHTML = mobileHTML1;
    }
    else {
        page.innerHTML = desktopHTML;
    }
});

var desktopHTML = `
<div class = "card-body" id = "card-content">
    <form action = "index_signed_in.html">
        <div class = "form-row">
            <div class = "form-group col-lg-6">
                <label for="institutions">
                    Institution:
                </label>
                <select name="institutions" class = "custom-select" id="institutions">
                    <option value = "None" selected = "selected">None</option>
                    <option value="IMGGE">IMGGE</option>
                    <option value="RAF">RAF</option>
                    <option value="ETF">ETF</option>
                    <option value="FON">FON</option>
                    <option value="UCLA">UCLA</option>
                    <option value="Stanford">Stanford</option>
                    <option value="MIT">MIT</option>
                    <option value="Caltech">Caltech</option>
                </select>
            </div>
            <div class = "form-group col-lg-6">
                <label for="departments">
                    Department:
                </label>
                <select name="departments" class = "custom-select" id="departments">
                    <option value = "None" selected = "selected">None</option>
                    <option value="CS">Computer Science</option>
                    <option value="CE">Computer Engineering</option>
                    <option value="CN">Computer Networks</option>
                </select>
            </div>
        </div>
        <hr class="my-4 d-none d-lg-block"/>
        <div class = "form-row">
            <div class = "form-group col-lg-6">
                <label for="name">
                    First name:
                </label>
                <input type = "text" class = "form-control" id = "name" placeholder = "First name" required = "required"/>
            </div>
            <div class = "form-group col-lg-6">
                <label for="surname">
                    Last name:
                </label>
                <input type = "text" class = "form-control" id = "surname" placeholder = "Last name" required = "required"/>
            </div>
        </div>
        <div class = "form-row">
            <div class = "form-group col-lg-12">
                <label for="email">
                    Email:
                </label>
                <input type = "email" class = "form-control" id = "email" placeholder = "Email" required = "required"/>
                <small id="emailHelp" class="text-muted">
                    Please use your institution email so we can allow you to use all our features quicker.
                </small>
            </div>
        </div>
        <div class = "form-row">
            <div class = "form-group col-lg-6">
                <label for="password">
                    Password:
                </label>
                <div class = "input-group">
                    <input type = "password" class = "form-control" id = "password" placeholder = "Password" required = "required"/>
                    <div class="input-group-append">
                        <span class = "input-group-text">
                            <span class = "far fa-eye" id = "eye" onClick = "switchConfirm('password', 'eye', 'confirm')"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class = "form-group col-lg-6">
                <label for="confirm">
                    Confirm password:
                </label>
                <input type = "password" class = "form-control" id = "confirm" placeholder = "Password" required = "required"/>
            </div>
        </div>
        <div class = "form-row">
            <div class="custom-control custom-checkbox ml-auto mr-auto">
                <input type="checkbox" class="custom-control-input" id="termsagree" required = "required"/>
                <label class="custom-control-label" for="termsagree">I agree to the terms of service.</label>
            </div>
        </div>
        <button type = "submit" class = "btn btn-primary btn-block mt-2">
            Sign up
        </button>
    </form>
    <h5 class = "mt-4">
        Or sign up with:
    </h5>
    <button type = "button" class = "btn btn-outline-secondary btn-block mt-3">
        <span class= "fab fa-google"></span>
        Google
    </button>
    <button type = "button" class = "btn btn-outline-secondary btn-block mt-3">
        <span class= "fab fa-microsoft"></span>
        Microsoft
    </button>
    <button type = "button" class = "btn btn-outline-secondary btn-block mt-3">
        <span class= "fab fa-linkedin"></span>
        LinkedIn
    </button>
</div>
`
var mobileHTML1 = `
<form action = "index_signed_in.html">
    <div class = "form-group">
        <label for="institutions">
            Institution:
        </label>
        <select name="institutions" class = "custom-select" id="institutions">
            <option value = "None" selected = "selected">None</option>
            <option value="IMGGE">IMGGE</option>
            <option value="RAF">RAF</option>
            <option value="ETF">ETF</option>
            <option value="FON">FON</option>
            <option value="UCLA">UCLA</option>
            <option value="Stanford">Stanford</option>
            <option value="MIT">MIT</option>
            <option value="Caltech">Caltech</option>
        </select>
    </div>
    <div class = "form-group">
        <label for="departments">
            Department:
        </label>
        <select name="departments" class = "custom-select" id="departments">
            <option value = "None" selected = "selected">None</option>
            <option value="CS">Computer Science</option>
            <option value="CE">Computer Engineering</option>
            <option value="CN">Computer Networks</option>
        </select>
    </div>
    <button type = "button" class = "btn btn-primary ml-auto" onClick="nextPage()">Next</button>
    <div class = "text-center mt-auto d-block d-lg-none">
        Already have an account?
        <a href = "login.html">
            Sign in.
        </a>
    </div>
</form>
`

var mobileHTML2 = `
<form action = "index_signed_in.html">
    <div class = "form-row">
        <div class = "form-group col-lg-6">
            <label for="name">
                First name:
            </label>
            <input type = "text" class = "form-control" id = "name" placeholder = "First name" required = "required"/>
        </div>
        <div class = "form-group col-lg-6">
            <label for="surname">
                Last name:
            </label>
            <input type = "text" class = "form-control" id = "surname" placeholder = "Last name" required = "required"/>
        </div>
    </div>
    <div class = "form-row">
        <div class = "form-group col-lg-12">
            <label for="email">
                Email:
            </label>
            <input type = "email" class = "form-control" id = "email" placeholder = "Email" required = "required"/>
            <small id="emailHelp" class="text-muted">
                Please use your institution email so we can allow you to use all our features quicker.
            </small>
        </div>
    </div>
    <div class = "form-row">
        <div class = "form-group col-lg-12">
            <label for="password">
                Password:
            </label>
            <input type = "password" class = "form-control" id = "password" placeholder = "Password" required = "required"/>
        </div>
    </div>
    <div class = "form-row">
        <div class = "form-group col-lg-12">
            <label for="confirm">
                Confirm password:
            </label>
            <input type = "password" class = "form-control" id = "confirm" placeholder = "Password" required = "required"/>
        </div>
    </div>
    <div class = "form-row">
        <div class="custom-control custom-checkbox ml-auto mr-auto">
            <input type="checkbox" class="custom-control-input" id="termsagree" required = "required"/>
            <label class="custom-control-label" for="termsagree">I agree to the terms of service.</label>
        </div>
    </div>
    <button type = "submit" class = "btn btn-primary btn-block mt-2">
        Sign up
    </button>
</form>
<h5 class = "mt-4">
    Or sign up with:
</h5>
<div class = "text-center">
    <span class= "fab fa-google py-2 px-5 connections"></span>
    <span class= "fab fa-windows py-2 px-5 connections"></span>
    <span class= "fab fa-linkedin-in py-2 px-5 connections"></span>
</div>
<div class = "text-center mt-1 d-block d-lg-none">
    Already have an account?
    <a href = "login.html">
        Sign in.
    </a>
</div>
`

mql.addEventListener( "change", (e) => {
    if (e.matches) {
        page.innerHTML = mobileHTML1;
    }
    else {
        page.innerHTML = desktopHTML;
    }
})

function nextPage() {
    if(mql.matches) {
        page.innerHTML = mobileHTML2;
    }
}