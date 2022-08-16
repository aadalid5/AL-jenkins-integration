pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                // 2 if deploy succeed, increment tag
                script{
                    echo "DEPLOY WORKS"
                    echo getNextVersion()
                }

                echo getNextVersion()
                
                // 3 push tags to remote
                // sshagent(["github-key-a-id"]){
                //     script {
                //         sh 'git remote set-url origin  git@github.com:aadalid5/jenkins-integration.git'
                //         sh 'git push origin HEAD:main && git push --tags'
                //     }
                // }

            }
        }

        stage('post-release') {
            steps {
            // 3 get new value of tag and push to remote  
            echo "2 FOO is '${FOO}'" 
            }
        }
        
    }
}

def getNextVersion(){
    // env.releaseType
    // npx currentVersion
    newVersion = "0.1.2"
    return newVersion
}