variable "profile" {
  default = "tgodfrey"
}
variable "region" {
  default = "us-west-2"
}
variable "vpc_cidr_block" {}
variable "public_subnet_a_cidr" {}
variable "private_subnet_a_cidr" {}
variable "public_subnet_b_cidr" {}
variable "private_subnet_b_cidr" {}
variable "ec2_instance_type" {}
variable "ec2_keypair" {}
variable "app_server_ami_id" {}
variable "jenkins_server_ami_id" {}
variable app_server_1_private_ip {}
variable app_server_2_private_ip {}
variable "lb_server_private_ip" {}
variable "jenkins_server_private_ip" {}
variable "jump_server_private_ip" {}
variable "storage_server_private_ip" {}
variable "db_server_ip" {}
variable "jenkins_server_hostname" {}
variable "storage_server_hostname" {}
variable "jump_server_hostname" {}
variable "app_server_1_hostname" {}
variable "app_server_2_hostname" {}
variable "lb_server_hostname" {}
variable "db_server_hostname" {}
variable "db_name" {}
variable "db_user_name" {}
variable "db_user_pass" {}
variable "db_port" {
  default = 5432
}