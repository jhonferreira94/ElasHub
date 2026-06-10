// Extrai o nó da flor do Figma via relay TalkToFigma (ws://localhost:3055)
// e grava como assets/images/logo-elashub.png
import { writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';

const CHANNEL = process.argv[2] || 'alr5xcwc';
const NODE_ID = process.argv[3] || '85:5';
const OUT = process.argv[4] || 'C:/Users/Jhonatan/elashub/assets/images/logo-elashub.png';
const SCALE = 3;

const ws = new WebSocket('ws://localhost:3055');
let exportId = null;

const send = (obj) => ws.send(JSON.stringify(obj));

ws.addEventListener('open', () => {
  const joinId = randomUUID();
  send({ id: joinId, type: 'join', channel: CHANNEL, message: { id: joinId, command: 'join', params: { channel: CHANNEL, commandId: joinId } } });
  console.error('joined channel', CHANNEL);
  setTimeout(() => {
    exportId = randomUUID();
    send({
      id: exportId,
      type: 'message',
      channel: CHANNEL,
      message: { id: exportId, command: 'export_node_as_image', params: { nodeId: NODE_ID, format: 'PNG', scale: SCALE, commandId: exportId } },
    });
    console.error('export requested for', NODE_ID);
  }, 800);
});

ws.addEventListener('message', (ev) => {
  let json;
  try { json = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString()); } catch { return; }
  const msg = json.message;
  if (!msg) return;
  const result = msg.result || msg;
  if (result && result.imageData) {
    writeFileSync(OUT, Buffer.from(result.imageData, 'base64'));
    console.error('SAVED', OUT, Buffer.from(result.imageData, 'base64').length, 'bytes');
    ws.close();
    process.exit(0);
  }
});

ws.addEventListener('error', (e) => { console.error('WS error', e.message || e); process.exit(1); });
setTimeout(() => { console.error('timeout, no imageData received'); process.exit(2); }, 30000);
