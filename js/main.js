// 评分规则配置
const scoringRules = {
    interaction: [
        {q: 'input[name="q4"]', options: [0,1,2,3]},
        {q: 'input[name="q5"]', options: [0,1,2,3]},
        {q: 'input[name="q6"]', type: 'checkbox', values: {
            'basic': 1, 'long': 2, 'cross': 3
        }},
        {q: 'input[name="q7"]', options: [1,2,3]}
    ],
    // ... 其他规则保持不变
};

// 按钮选择效果
// 按钮交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    initializeRadioButtons();
});

function initializeRadioButtons() {
    const radioGroups = document.querySelectorAll('.radio-group');
    
    radioGroups.forEach(group => {
        const buttons = group.querySelectorAll('.radio-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    });
}

// 表单验证和提交
function validateForm() {
    let isValid = true;
    let unfinishedQuestions = [];
    
    // 检查必填项
    // ... 验证逻辑保持不变

    return isValid;
}

function submitSurvey() {
    if (!validateForm()) return;
    
    const scores = calculateScores();
    displayResults(scores);
}

// ... 其他函数保持不变