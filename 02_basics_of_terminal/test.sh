# num1=2
# num2=2
# echo $((num1+num2))
#to print it we do just type "./test.sh" file name it will print if it have excuatable permission to check permission we do "ls -l" to give permission we do "chmod +x test.sh"


#to create a file using loop
# for i in {1..5}; do touch "app$i.js"; done #this will create file from 1 to 5

for i in {1..5}; do rm "app$i.js"; done  #to remove file

