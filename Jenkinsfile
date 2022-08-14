pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        newVersion = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {

                // 1 deploy, with current tag (or current tag + 1)
                sshagent(["github-key-a-id"]) {
                    script{                         
                        sh 'git fetch'
                        
                        currentVersion = sh(script: "git describe --tags")
                        echo "1 current version is '${currentVersion}'" 

                        echo "DEPLOY"
                    }
                }

                // 2 if deploy succeed, increment tag
                
                echo "DEPLOY WORKS"
                newVersion = sh(script: "npm version patch --commit-hooks=false -m 'bump version to %s'", returnStdout: true)
                
                sshagent(["github-key-a-id"]){
                    script {
                        sh 'git remote set-url origin  git@github.com:aadalid5/jenkins-integration.git'
                        sh 'git push --tags'
                    }
                }

            }
        }

        stage('post-release') {
            steps {
            // 3 get new value of tag and push to remote  
            echo "2 newVersion is '${newVersion}'" 
            }
        }
        
    }
}