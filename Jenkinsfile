pipeline { 
    agent any 
        stages { 
            stage ('Build') { 
                steps { 
                    sh "echo 'Running build phase. '"
                    sh "sudo npm install"

                }
            }
            stage ('Deploy') { 
                steps { 
                    sh "echo 'Running Deployment phase phase.'"
                    sh "sudo npm run build"
                    sh "ls"
                    sh "sudo cp -r build/ /var/www/html"
                }
            }
        }
    }
