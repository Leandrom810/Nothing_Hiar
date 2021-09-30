<?php
    namespace mail;
    class Message{
        private $email;
        private $title;
        private $message;

        public function __get($attribute){
            return $this -> $attribute;
        }

        public function __set($attribute, $value){
            $this->$attribute = $value;
        }

        public function validateMessage(){
            if(empty($this->email) || empty($this->message) || empty($this->title)){
                return false;
            } else {
                return true;
            }
        }

    }

    

?>