<?php

namespace App\Controllers;

use Client;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;

class UserController
{
    private EntityManager $_entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->_entityManager = $entityManager;
    }

    public function postRegister(Request $request, Response $response, array $args): Response
    {
        $err = false;
        $body = $request->getParsedBody();
        
        $firstname = $body['firstname'] ?? "";
        $lastname = $body['lastname'] ?? "";
        $login = $body['login'] ?? "";
        $email = $body['email'] ?? "";
        $address = $body['address'] ?? "";
        $city = $body['city'] ?? "";
        $postalcode = $body['postalcode'] ?? "";
        $phoneNumber = $body['phoneNumber'] ?? "";
        $country = $body['country'] ?? "";
        $civility  = $body['civility'] ?? "";
      
        $password = $body['password'] ?? "";
        $password2 = $body['password2'] ?? "";

        if(!$lastname || !$firstname || !$email || !$password || !$address || !$city || !$zipCode || !$phone || !$country || !$civility)
        {
            $err = true;
        }

        if (!preg_match("/^[a-zA-Z ]*$/",$lastname)) {
            $err = true;
        }
        
        if (!preg_match("/^[a-zA-Z ]*$/",$firstname)) {
            $err = true;
        }

        if (!preg_match("/^[a-zA-Z0-9 ]{1,}/",$login)) {
            $err = true;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $err = true;
        }

        if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/",$password)) {
            $err = true;
        }

        if (!preg_match("/^[a-zA-Z0-9 ]{1,}/",$address)) {
            $err = true;
        }

        if (!preg_match("/^[a-zA-Z ]{1,}/",$city)) {
            $err = true;
        }

        if (!preg_match("/^[0-9]{5}/",$postalcode)) {
            $err = true;
        }

        if (!preg_match("/^[0-9]{10}/",$phoneNumber)) {
            $err = true;
        }

        if(!preg_match("/^[a-zA-Z ]{1,}/",$country)) {
            $err = true;
        }

        if ($civility != "M" && $civility != "Mme") {
            $err = true;
        }

        if($err)
        {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $repository = $this->_entityManager->getRepository("Client");
        $dbUser = $repository->findOneBy(array("username" => $login));

        if ($dbUser == null) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $client = new Client;
        $client->setLastName($lastname);
        $client->setFirstName($firstname);
        $client->setUserName($login);
        $client->setEmail($email);
        $client->setPassword($password);
        $client->setAddress($address);
        $client->setCity($city);
        $client->setZipCode($postalcode);
        $client->setPhone($phoneNumber);
        $client->setCountry($country);
        $client->setCivility($civility);

        $this->_entityManager->persist($client);
        $this->_entityManager->flush();

        $response -> getBody() -> write(json_encode($client));
        
        return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
    }

    public function postLogin(Request $request, Response $response, array $args): Response
    {
        $err = false;
        $body = $request->getParsedBody();
        
        $username = $body['login'] ?? "";
        $password = $body['password'] ?? "";

        if(!$username || !$password)
        {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        if (!preg_match("/^[a-zA-Z0-9 ]{1,}/",$username)) {
            $err = true;
        }

        if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/",$password)) {
            $err = true;
        }
        
        if($err)
        {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $repository = $this->_entityManager->getRepository("Client");
        $dbUser = $repository->findOneBy(array("username" => $username, "password" => $password));

        if ($dbUser == null) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        if ($dbUser->getPassword() != $password and $dbUser->getUsername() != $username) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $user = array(
            "lastname" => $dbUser->getlastname(),
            "firstName" => $dbUser->getFirstName(),
            "login" => $dbUser->getUsername(),
            "email" => $dbUser->getEmail(),
            "address" => $dbUser->getAddress(),
            "city" => $dbUser->getCity(),
            "zipCode" => $dbUser->getZipCode(),
            "phone" => $dbUser->getPhone(),
            "country" => $dbUser->getCountry(),
            "civility" => $dbUser->getCivility(),
            "password" => $dbUser->getPassword(),
        );

        $response->getBody()->write(json_encode($user));
        $response = JWTController::createJWT($response, $username);

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}