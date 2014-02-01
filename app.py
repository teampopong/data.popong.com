#! /usr/bin/python2.7
# -*- coding: utf-8 -*-

from flask import Flask, render_template
from flask.ext.assets import Environment as Asset

import settings
from utils.i18n import PopongBabel

app = Flask(__name__)
app.debug = settings.SERVER['debug']


Asset(app)
PopongBabel(app, **settings.BABEL)


@app.route('/')
def home():
    return render_template('home.html')


def cmd_args():
    from argparse import ArgumentParser
    parser = ArgumentParser()
    parser.add_argument('-l', dest='locale',
            choices=app.LOCALES + ['auto'],
            default='auto')
    args = parser.parse_args()
    return args


def main():
    args = cmd_args()
    if args.locale and args.locale != 'auto':
        app.babel.locale_selector_func = lambda: args.locale
    app.run(settings.SERVER['host'], settings.SERVER['port'])


if __name__=='__main__':
    main()
