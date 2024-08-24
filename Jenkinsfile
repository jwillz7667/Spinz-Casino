pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    def services = ['auth', 'game-management', 'payment', 'social']
                    services.each { service ->
                        sh "cd backend/services/${service} && docker build -t spinz3-${service}-service:latest ."
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f backend/services/auth/k8s/deployment.yaml'
                    sh 'kubectl apply -f backend/services/auth/k8s/service.yaml'
                    // Repeat for other services
                    sh 'kubectl apply -f backend/infra/ingress.yaml'
                }
            }
        }
    }
    environment {
        JWT_SECRET = 'JdUDMqoiqIGA4gbkazIbG7zM5GojC9mDuXpGbGU2E+GfCELya4Fy/3Y9HnmR1lk8fNuqPZtOrmvdXwL4CSFNQ=='
    }
}
