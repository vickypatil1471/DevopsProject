function bookEvent(event){

event.preventDefault();

let name =
document.getElementById("name").value;

let type =
document.getElementById("eventType").value;

document.getElementById("message").innerHTML =

`
<h2>
Thank You ${name}
</h2>

<p>
Your ${type} booking request has been submitted.
</p>
`;
}