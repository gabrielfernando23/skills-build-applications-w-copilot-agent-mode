from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Limpa dados existentes
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Times
        marvel = Team.objects.create(name='marvel', members=['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'])
        dc = Team.objects.create(name='dc', members=['Bruce Wayne', 'Clark Kent', 'Diana Prince'])

        # Usuários
        User.objects.create(name='Tony Stark', email='tony@marvel.com', team='marvel')
        User.objects.create(name='Steve Rogers', email='steve@marvel.com', team='marvel')
        User.objects.create(name='Natasha Romanoff', email='natasha@marvel.com', team='marvel')
        User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team='dc')
        User.objects.create(name='Clark Kent', email='clark@dc.com', team='dc')
        User.objects.create(name='Diana Prince', email='diana@dc.com', team='dc')

        # Atividades
        Activity.objects.create(user='Tony Stark', type='run', duration=30, date='2026-03-17')
        Activity.objects.create(user='Bruce Wayne', type='cycle', duration=45, date='2026-03-16')
        Activity.objects.create(user='Diana Prince', type='swim', duration=60, date='2026-03-15')

        # Leaderboard
        Leaderboard.objects.create(team='marvel', points=150)
        Leaderboard.objects.create(team='dc', points=120)

        # Workouts
        Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='easy')
        Workout.objects.create(name='Ironman Training', description='Advanced endurance routine', difficulty='hard')

        self.stdout.write(self.style.SUCCESS('Banco octofit_db populado com dados de teste!'))
