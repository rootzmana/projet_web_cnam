<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\HttpKernel\KernelInterface;


class MailerController extends AbstractController
{
    /**
     * @Route("/email")
     */
    public function sendEmail(MailerInterface $mailer, Request $request, KernelInterface $appKernel)
    {
        $dotenv = new Dotenv();
        $dotenv->load($appKernel->getProjectDir() . '/.env.local');
        $secret = $_ENV['RECAPTCHA_KEY'];

        $client = HttpClient::create();
        $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'body' => ['secret' => $secret, 'response' => $request->query->get('captcha')]
        ]);
        echo ($response->getContent());
        if ($response->toArray()["success"]) {
            $email = (new Email())
                ->from($request->query->get('mail'))
                ->to('matthieu.desvignes.md@gmail.com')
                ->subject("Send from matthieudesvignes.com : " . $request->query->get('subject'))
                ->text($request->query->get('content'));

            $mailer->send($email);

            $res = new Response(Response::HTTP_OK);
        } else {
            $res = new Response(Response::HTTP_BAD_REQUEST);
        }

        return $res;
    }
}
