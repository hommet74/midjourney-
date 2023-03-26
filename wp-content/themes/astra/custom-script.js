jQuery(document).ready(function($) {
    $('#chatgpt-form').on('submit', function(e) {
        e.preventDefault();

        $('#chatgpt-response').html('正在等待描述...');

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: chatgpt_ajax.ajax_url, // 修改这里
            data: {
                action: 'chatgpt_ajax_request',
                form_data: formData
            },
            success: function(response) {
                $('#chatgpt-response').html(response);
            },
            error: function() {
                $('#chatgpt-response').html('请求失败，请稍后再试');
            }
        });
    });
});
