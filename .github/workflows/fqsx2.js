name: 番茄小说2


on:
  workflow_dispatch:
  schedule:
     - cron: '45 */1 * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        FQXSURL: ${{ secrets.FQXSURL }}
        FQXS: ${{ secrets.FQXS }}    
    steps:
      - name: Checkout
        uses: actions/checkout@v1
        
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        run: |
          npm install
      - name: '运行 【番茄小说】'
        run: |
          node Task/fqxs2.js
        env:
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}          
