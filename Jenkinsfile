pipeline {
    agent any
    
    //tools { nodejs "Node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                sshagent(credentials:["github-key-a-id"]) {
                    script{ 
                        echo "FOO is '${FOO}'" 

                        // sh "npx release-it@14.14.3 --no-npm --no-git --no-increment --github.release --ci"

                        //FOO = sh(script: "npm version patch --commit-hooks=false -m 'bump version to %s'", returnStdout: true)
                        
                        sh "git push --tags"
                        // sh "npx release-it@14.14. --no-npm --no-git --no-increment --github.release --ci"
                        
                    }
                }
                
                echo "DEPLOY WORKS"
                
            

            }
        }

        // stage('post-release') {
        //     steps {
                
        //     echo "FOO is '${FOO}'" 
        //     }
        // }
        
    }
}