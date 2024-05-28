<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class NewsController extends Controller
{
    public function index()
    {
        try {
            $client = new Client();
            $response = $client->get('https://gnews.io/api/v4/top-headlines', [
                'query' => [
                    'category' => 'general',
                    'lang' => 'en',
                    'country' => 'us',
                    'max' => 10,
                    'apikey' => 'a11bb6b3ffd8775860ed8c04460083d5',
                ]
            ]);

            $newsData = json_decode($response->getBody()->getContents(), true);

            $articlesHTML = '';
            foreach ($newsData['articles'] as $article) {
                $articlesHTML .= '<div class="article">';
                $articlesHTML .= '<h3>' . $article['title'] . '</h3>';
                $articlesHTML .= '<p>' . $article['description'] . '</p>';
                $articlesHTML .= '<img src="' . $article['image'] . '" alt="' . $article['title'] . '" />';
                $articlesHTML .= '<a href="' . $article['url'] . '" target="_blank" rel="noopener noreferrer">Read More</a>';
                $articlesHTML .= '</div>';
            }

            return response()->json(['articlesHTML' => $articlesHTML]);
        } catch (GuzzleException $e) {
            // Log error if necessary
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
