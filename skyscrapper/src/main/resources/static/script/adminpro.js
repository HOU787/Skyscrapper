
document.querySelectorAll('.btn-primary').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    let product_id = this.closest("tr").querySelector("td:first-child").textContent;

    $.ajax({
      url: '/skyscrapper/admin/product/updatepro',
      method: 'GET',
      data: { "product_id": product_id },
      success: function(resp) {
        location.reload();
        alert("Product " + product_id + " allowed");
      },
      error: function (jqXHR, textStatus, errorThrown){
		console.log(jqXHR);  //응답 메시지
		console.log(textStatus); //"error"로 고정인듯함
		console.log(errorThrown);
		alert("Request processing failed. Please contact to system administrator.");
	}
    });
  });
});


document.querySelectorAll('.btn-danger').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    let product_id = this.closest("tr").querySelector("td:first-child").textContent;
	
    $.ajax({
      url: '/skyscrapper/admin/product/deletepro',
      method: 'GET',
      data: { "product_id": product_id },
      success: function(resp) {
        location.reload();
        alert("Product " + product_id + " blocked");
      },
      error: function (jqXHR, textStatus, errorThrown){
		console.log(jqXHR);  //응답 메시지
		console.log(textStatus); //"error"로 고정인듯함
		console.log(errorThrown);
		alert("Request processing failed. Please contact to system administrator.");
	}
    });
  });
});