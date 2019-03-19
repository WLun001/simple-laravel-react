<?php
/**
 * Created by PhpStorm.
 * User: wlun
 * Date: 3/19/19
 * Time: 2:40 PM
 */


namespace App\Console\Commands;

use App\Candidate;
use App\Party;
use Illuminate\Console\Command;

class InitData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'init:data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialize default data';

    private $parties_data = [
        [
            'name' => 'Parti Ayam',
        ],
        [
            'name' => 'Parti Itik',
        ],
        [
            'name' => 'Parti Kucing',
        ],
    ];

    private $candidates_data = [
        [
            'name' => 'Abu Bakar Muhammad',
            'party_id' => 3,
        ],
        [
            'name' => 'Ng Pei Li',
            'party_id' => 3,
        ],
        [
            'name' => 'Ranjit Singh Deo',
            'party_id' => 3,
        ],
        [
            'name' => 'Foo Yoke Wai',
            'party_id' => 3,
        ],
        [
            'name' => 'Chia Kim Hooi',
            'party_id' => 3,
        ],
    ];


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        foreach ($this->parties_data as $parties_data) {
            $party = new Party;
            $party->name = $parties_data['name'];
            $party->save();

            echo "Party $party->name created successfully\n";
        }
        foreach ($this->candidates_data as $candidates_data) {
            $candidate = new Candidate;
            $candidate->name = $candidates_data['name'];
            $candidate->party = $candidates_data['party_id'];
            $party->save();

            echo "Candidate $candidate->name created successfully\n";
        }
    }
}
