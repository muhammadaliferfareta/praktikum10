$(document).ready(function () {
    $("#formSapa").submit(function (event) {
        event.preventDefault(); // Mencegah pengiriman form standar

        let name = $("#name").val().trim(); // Ambil nilai input nama

        $.ajax({
            url: "post.php", // Endpoint PHP untuk menangani data
            type: "POST",
            data: { name: name },
            success: function (response) {
                $("#response").html(response); // Menampilkan respons di elemen #response
            },
            error: function () {
                $("#response").html("<span class='text-danger'>Terjadi kesalahan. Silakan coba lagi.</span>");
            }
        });
    });
});
