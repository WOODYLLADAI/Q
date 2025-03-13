// 添加按钮选择效果
document.addEventListener('DOMContentLoaded', function() {
    const radioGroups = document.querySelectorAll('.radio-group');
    
    radioGroups.forEach(group => {
        const buttons = group.querySelectorAll('.radio-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除同组其他按钮的选中状态
                buttons.forEach(b => b.classList.remove('selected'));
                // 添加当前按钮的选中状态
                this.classList.add('selected');
            });
        });
    });
});