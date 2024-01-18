export const useGlobalDataStore = defineStore('globalDataStore', {
    state: () => ({
        loading : false,
        loading_data : false,
        wizard_form : false,
        errorMsg : '',
        side_indicator : false,
        side_mini : false,
        toogle_dark : false,
        progress : 5,
        progress_style : '',
        uploading: false,
        deleting: false,
        is_open_dpc : false,
        pass_step_one : false,
        pass_step_two : false,
        pass_step_three : false,
        pass_step_four : false,
        pass_step_five : false,
        pass_step_final : false,
        url_bucket_img : 'https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/'

    }),
})
