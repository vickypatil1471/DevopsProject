pipeline {

    agent any

    environment {

        IMAGE_NAME = 'eventsphere:latest'

        CONTAINER_NAME = 'eventspherecontainer'

        WSL_ANSIBLE_SCRIPT = '/mnt/c/Users/vicky/OneDrive/Desktop/Devops/EventSphere/devopsdeploy.yml'
    }

    stages {

        stage('Build Docker Image') {

            steps {

                script {

                    bat """
                    docker build -t %IMAGE_NAME% .
                    """
                }
            }
        }

        stage('Deploy with Ansible on WSL') {

            steps {

                script {

                    bat """
                    wsl ansible-playbook %WSL_ANSIBLE_SCRIPT%
                    """
                }
            }
        }
    }
}