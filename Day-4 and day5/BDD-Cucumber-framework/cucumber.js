module.exports = {
    default: {
        require: [
            'features/step_definitions/**/*.ts',
            'hooks/**/*.ts'
        ],
        requireModule: [
            'ts-node/register'
        ],
        format: [
            'progress',
            'json:reports/cucumber-report.json'
        ],
    }
};