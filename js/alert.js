const alertConfirm = (title1,detail1,title2,detail2) => {
    Swal.fire({
        title: title1,
        text: detail1,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#75bb74',
        cancelButtonColor: '#D32626',
        confirmButtonText: 'ยันยัน',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: title2,
            text: detail2,
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonColor: '#75bb74',
            confirmButtonText: 'ตกลง',
          }
          )
        }
      })
}

const alert = (status,title,detail) => {
    Swal.fire({
        position: 'center',
        icon: status,
        title: title,
        text: detail,
        showConfirmButton: false,
        timer: 3000
      })
}