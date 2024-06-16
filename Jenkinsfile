pipeline{
    agent{
        label 'agent_docker'
    }
    stages{
        stage('Checkout'){
            steps{
                git branch: 'dev_samuel', url: 'https://github.com/SapphireSquadLandmarkOrg/nodejs-app-public.git'
            }
        }
        stage('Build'){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs22'){
                    sh 'npm install'
                }
            }
        }
        stage('Static Quality Analysis'){
            steps{
                sh 'echo sonarqube scanning'
                nodejs(nodeJSInstallationName: 'nodejs22'){
                    withSonarQubeEnv('sonarqube server'){
                        sh 'npm i sonar-scanner --save-dev'
                        // sh 'npm run sonar-scanner'
                        sh 'npm run sonar'
                    }
                }
            }
        }
        stage('Package'){
            steps{
                sh 'echo create docker image'
                sh 'docker build -t bluesamuel/nodejs-app .'
            }
        }
        stage('Deploy'){
            steps{
                sh 'echo deploy to docker container'
                sh 'docker run --name nodejsapp -d -p 8081:9981 bluesamuel/nodejs-app:latest'
            }
        }
        stage('Notification'){
            steps{
                sh 'echo email notification'
            }
        }
    }
}
