import Swal from "sweetalert2";
import Toastify from "../../components/Toastify";
import { Api } from "../../config/Api";

const ArticleDelete = (postId, getData) => {
    Swal.fire({
        title: 'آیا مطمئن به حذف نوشته هستید ؟',
        showCancelButton: true,
        confirmButtonText: 'حذف',
        cancelButtonText: 'لغو',
        confirmButtonColor: 'red'
    }).then((result) => {
        if (result.isConfirmed) {
            Api.delete('posts/' + postId).then(res => {
                Toastify('نوشته با موفقیت حذف شد', 'success');
                getData()
            }).catch(err => {
                console.log(err);
                Toastify('خطا در ارسال درخواست', 'error')
            })
        }
    })
}

export default ArticleDelete;